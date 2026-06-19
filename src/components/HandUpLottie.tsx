import { useEffect, useState, type ComponentType, type JSX } from "react";
import type { LottieComponentProps } from "lottie-react";

export default function HandUpLottie(): JSX.Element | null {
  const [Lottie, setLottie] = useState<ComponentType<LottieComponentProps> | null>(
    null,
  );
  const [animationData, setAnimationData] =
    useState<LottieComponentProps["animationData"]>(null);

  useEffect(() => {
    void Promise.all([
      import("lottie-react"),
      import("../assets/handup.json"),
    ]).then(([lottieModule, animationModule]) => {
      setLottie(() => lottieModule.default);
      setAnimationData(animationModule.default);
    });
  }, []);

  if (!Lottie || !animationData) return null;

  return <Lottie animationData={animationData} loop className="w-20" />;
}
