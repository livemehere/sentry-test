import Link from "next/link";
import { OurFieldLayout } from "@/components/OurFieldLayout";
import ErrorBoundary from "@/components/ErrorBoundary";
import * as Sentry from "@sentry/react";
import { useEffect, useState } from "react";

export default function SocialGroundPage() {
  return (
    <OurFieldLayout>
      <h1>Social Ground</h1>
      <Sentry.ErrorBoundary fallback={<div>에러발생</div>}>
        <ErrorButton />
      </Sentry.ErrorBoundary>
    </OurFieldLayout>
  );
}

function ErrorButton() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<any>([1, 2]);

  useEffect(() => {
    if (count > 2) {
      throw new Error("리액트 센트리 에러");
    }
  }, [count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        UP {count}
      </button>
      <div>
        {user.map((u) => (
          <span key={u}>{u}</span>
        ))}
      </div>
      <button onClick={() => setUser({})}>toggle</button>
    </div>
  );
}
