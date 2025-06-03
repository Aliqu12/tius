import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <Card className="container mx-auto max-w-4xl bg-white border-t-2 border-primary shadow-lg">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">
              Diese Website verwendet Cookies, um Ihnen die beste Erfahrung zu bieten.{" "}
              <button className="text-primary hover:underline">Datenschutzerklärung</button>
            </p>
            <div className="flex gap-2">
              <Button onClick={acceptCookies} size="sm" className="bg-primary hover:bg-primary/90">
                Akzeptieren
              </Button>
              <Button onClick={declineCookies} variant="outline" size="sm">
                Ablehnen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
