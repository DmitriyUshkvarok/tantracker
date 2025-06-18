import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="pt-14">Hello "/dashboard/"!</div>;
}
