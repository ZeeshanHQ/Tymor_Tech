"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses exploring holographic displays",
    price: 499,
    yearlyPrice: 4999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "1 Holobox unit", icon: <Briefcase size={20} /> },
      { text: "Basic hologram rendering", icon: <Database size={20} /> },
      { text: "Standard support", icon: <Server size={20} /> },
    ],
    includes: [
      "Free includes:",
      "HD resolution display",
      "Touch interaction",
      "Cloud sync",
      "Up to 5 hologram files",
      "Monthly updates",
    ],
  },
  {
    name: "Professional",
    description:
      "Best value for growing businesses with advanced holographic features",
    price: 1299,
    yearlyPrice: 12999,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "5 Holobox units", icon: <Briefcase size={20} /> },
      { text: "AI-powered rendering", icon: <Database size={20} /> },
      { text: "Priority support 24/7", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "4K resolution display",
      "Advanced AI integration",
      "Custom hologram templates",
      "Up to 50 hologram files",
      "Real-time collaboration",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced solution with unlimited access for large organizations",
    price: 2999,
    yearlyPrice: 29999,
    buttonText: "Contact sales",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited Holobox units", icon: <Briefcase size={20} /> },
      { text: "Unlimited storage", icon: <Database size={20} /> },
      { text: "Dedicated account manager", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Professional, plus:",
      "8K resolution display",
      "Custom AI training",
      "White-label solution",
      "Unlimited hologram files",
      "Enterprise security",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-muted border border-border p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0"
              ? "text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-lg shadow-primary border-primary bg-gradient-to-t from-primary via-primary-600 to-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly Billing</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1"
              ? "text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-lg shadow-primary border-primary bg-gradient-to-t from-primary via-primary-600 to-primary"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly Billing
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-foreground">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-20 min-h-screen max-w-7xl mx-auto relative"
      ref={pricingRef}
    >
      <article className="text-left mb-6 space-y-4 max-w-2xl">
        <h2 className="md:text-6xl text-4xl capitalize font-medium text-foreground mb-4">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-start"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            We've got a plan that's perfect for you
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-base text-sm text-muted-foreground w-[80%]"
        >
          Trusted by industry leaders, Tymor LFTC helps businesses transform their customer experience with holographic technology. Explore which option is right for you.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 gap-4 py-6">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative border border-border ${
                plan.popular
                  ? "ring-2 ring-primary bg-primary/10"
                  : "bg-card "
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="xl:text-3xl md:text-2xl text-3xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div className="">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <p className="xl:text-sm md:text-xs text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-foreground">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-t from-primary to-primary-600 shadow-lg shadow-primary border border-primary text-primary-foreground"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-foreground to-foreground/80 shadow-lg shadow-foreground border border-border text-background"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl bg-card text-foreground border border-border shadow-lg`}
                >
                  Contact Sales
                </button>

                <div className="space-y-3 pt-4 border-t border-border">
                  <h2 className="text-xl font-semibold uppercase text-foreground mb-3">
                    Features
                  </h2>
                  <h4 className="font-medium text-base text-foreground mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 bg-card border border-primary rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-primary" />
                        </span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
