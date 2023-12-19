import React from "react";
import * as Sentry from "@sentry/browser";

export default class ErrorBoundary extends React.Component<
  {
    fallback?: React.ReactNode;
    children: React.ReactNode;
  },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 여기서 굳이 에러를 보낼 필요는 없을 듯, Sentry 가 이미 브라우저에서 발생하는 모든 에러를 캡처해서 보내고있음.
    // Sentry.captureMessage(error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}
