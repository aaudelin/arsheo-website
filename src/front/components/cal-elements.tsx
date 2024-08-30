"use client";

import { forwardRef, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button, ButtonProps } from "@/components/ui/button";
import * as React from "react";
import { cn } from "@/lib/utils";

function CalButton(props: ButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace="15min"
      data-cal-link="arsheo/15min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      {...props}
    >
      {props.children}
    </Button>
  );
}

const CalCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div
      data-cal-namespace="15min"
      data-cal-link="arsheo/15min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
});
CalCard.displayName = "CalCard";

export { CalButton, CalCard };
