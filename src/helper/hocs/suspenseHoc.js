import { Suspense } from "react";
import { OpacityAnimationContainer } from "../../baseUI/opacity-animation";

const SuspenseComponent = (Component, fallback) => {
  return (
    <Suspense fallback={fallback}>
      <OpacityAnimationContainer>
        <Component />
      </OpacityAnimationContainer>
    </Suspense>
  );
};

export default SuspenseComponent;
