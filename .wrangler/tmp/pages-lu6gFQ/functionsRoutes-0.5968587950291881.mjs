import { onRequestPost as __api_reservation_ts_onRequestPost } from "C:\\BenriyaWeb\\benriyaweb\\functions\\api\\reservation.ts"

export const routes = [
    {
      routePath: "/api/reservation",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_reservation_ts_onRequestPost],
    },
  ]