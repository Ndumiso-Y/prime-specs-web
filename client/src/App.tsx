import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SiteLayout } from "@/components/SiteLayout";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const EyeCare = lazy(() => import("@/pages/InnerPages").then((module) => ({ default: module.EyeCare })));
const Eyewear = lazy(() => import("@/pages/InnerPages").then((module) => ({ default: module.Eyewear })));
const MedicalAids = lazy(() => import("@/pages/InnerPages").then((module) => ({ default: module.MedicalAids })));
const About = lazy(() => import("@/pages/InnerPages").then((module) => ({ default: module.About })));
const Locations = lazy(() => import("@/pages/InnerPages").then((module) => ({ default: module.Locations })));
const Contact = lazy(() => import("@/pages/InnerPages").then((module) => ({ default: module.Contact })));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/eye-care" component={EyeCare} />
      <Route path="/eyewear" component={Eyewear} />
      <Route path="/medical-aids" component={MedicalAids} />
      <Route path="/about" component={About} />
      <Route path="/locations" component={Locations} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <SiteLayout>
          <Suspense fallback={<div className="route-loading" role="status"><span />Loading Prime Specs…</div>}>
            <Router />
          </Suspense>
        </SiteLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
