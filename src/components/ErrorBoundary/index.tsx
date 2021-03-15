import React from 'react';
import { Button, Result } from 'antd';

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, info: '', eventId: '' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({
      info: error + '' + info,
    });
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return (
        <Result
          status='500'
          title='500'
          subTitle={this.state.info}
          extra={<Button type='primary'>Report feedback</Button>}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
