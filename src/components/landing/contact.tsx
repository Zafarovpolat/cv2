import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data";
import { Github, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Card className="max-w-3xl mx-auto text-center bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="text-4xl font-headline font-bold text-foreground">
            Get In Touch
          </CardTitle>
          <CardDescription className="text-lg text-foreground/70 mt-2">
            Have a project in mind or just want to say hi? Let's connect.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button asChild size="lg">
              <Link href={contact.telegram} target="_blank">
                <Send className="mr-2 h-5 w-5" /> Telegram
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={contact.github} target="_blank">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
