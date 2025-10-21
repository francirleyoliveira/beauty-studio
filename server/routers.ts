import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { nanoid } from "nanoid";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  services: router({
    list: publicProcedure.query(async () => {
      return await db.getAllServices();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        return await db.getServiceById(input.id);
      }),
  }),

  professionals: router({
    list: publicProcedure.query(async () => {
      return await db.getAllProfessionals();
    }),
    getById: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        return await db.getProfessionalById(input.id);
      }),
  }),

  bookings: router({
    create: publicProcedure
      .input(
        z.object({
          serviceId: z.string(),
          professionalId: z.string(),
          date: z.string(),
          time: z.string(),
          customerName: z.string(),
          customerEmail: z.string().email(),
          customerPhone: z.string(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const booking = {
          id: nanoid(),
          userId: ctx.user?.id || "guest",
          serviceId: input.serviceId,
          professionalId: input.professionalId,
          date: input.date,
          time: input.time,
          customerName: input.customerName,
          customerEmail: input.customerEmail,
          customerPhone: input.customerPhone,
          notes: input.notes || null,
          status: "pending" as const,
        };
        return await db.createBooking(booking);
      }),
    myBookings: protectedProcedure.query(async ({ ctx }) => {
      return await db.getBookingsByUserId(ctx.user.id);
    }),
    all: protectedProcedure.query(async () => {
      return await db.getAllBookings();
    }),
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.string(),
          status: z.enum(["pending", "confirmed", "cancelled", "completed"]),
        })
      )
      .mutation(async ({ input }) => {
        await db.updateBookingStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
