"use client";

import { notifications } from "@/constants";
import { Rocket } from "lucide-react";
import { useState } from "react";

export function Widget() {
  const [clear, setClear] = useState(notifications);
  const [viewed, setViewed] = useState(false);

  function clearNotification() {
    setClear([]);
  }

  function viewedNotifications() {
    setViewed(true);
  }

  return (
    <div className="w-[448px] rounded overflow-hidden">
      <div className="flex justify-end mb-1">
        <button
          onClick={clearNotification}
          type="button"
          className="text-xs text-zinc-950 dark:text-violet-600 hover:text-violet-500 font-semibold"
        >
          Limpar Notificação
        </button>
      </div>
      {/* Header */}
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notification</span>

        <button
          onClick={viewedNotifications}
          type="button"
          className="text-violet-700 text-xs font-bold hover:text-violet-500"
        >
          MARCAR TODAS COMO LIDAS
        </button>
      </div>

      {clear.length === 0 ? (
        <div className="bg-zinc-300 dark:bg-zinc-950 flex items-center justify-center h-full py-52">
          <span className="text-zinc-500 text-xs font-medium">
            Sem notificações
          </span>
        </div>
      ) : (
        <div>
          <div className="bg-zinc-300 dark:bg-zinc-950 py-2 px-5 text-sm dark:text-zinc-400 text-zinc-500">
            Recentes
          </div>

          <div
            className={`${
              viewed ? "brightness-50" : ""
            } divide-y-2 dark:divide-zinc-950 divide-zinc-100 `}
          >
            {notifications.map((notification) => {
              return (
                <div
                  key={notification.id}
                  className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6"
                >
                  <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-sm leading-relaxed dark:text-zinc-100 text-zinc-900">
                      {notification.title}
                    </p>
                    <div className="text-xss text-zinc-400 flex items-center gap-1">
                      <span>Convite</span>
                      <div className="w-1 h-1 bg-green-500 rounded-full" />
                      <span>Há 3 min</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-zinc-300 dark:bg-zinc-950 py-2 px-5 text-sm dark:text-zinc-400 text-zinc-500">
            Antigas
          </div>

          <div
            className={`${
              viewed ? "brightness-50" : ""
            } divide-y-2 dark:divide-zinc-950 divide-zinc-100 `}
          >
            {notifications.map((notification) => {
              return (
                <div
                  key={notification.id}
                  className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6"
                >
                  <Rocket className="w-6 h-6 text-violet-500 mt-3" />
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-sm leading-relaxed dark:text-zinc-100 text-zinc-900">
                      {notification.title}
                    </p>
                    <div className="text-xss text-zinc-400 flex items-center gap-1">
                      <span>Convite</span>
                      <div className="w-1 h-1 bg-red-500 rounded-full" />
                      <span>Há 1 dia</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
