"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Share2, Globe, Mail, Link as LinkIcon, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: 'primary' | 'gold' | 'blue' | 'purple';
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  description: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyright?: string;
}

export const Footer: FC<FooterProps> = ({
  logoSrc,
  logoAlt,
  description,
  columns,
  socialLinks,
  copyright = `© ${new Date().getFullYear()} Tymor LFTC. All Rights Reserved.`,
}) => {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          <div className="flex flex-col gap-4 md:w-1/3">
            {logoSrc ? (
              <Link href="/" aria-label="home">
                <Image
                  src={logoSrc}
                  alt={logoAlt || "Logo"}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-foreground">Tymor LFTC</span>
              </div>
            )}
            <p className="text-muted-foreground">{description}</p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:w-2/3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col space-y-2 min-w-[120px]">
                <h4 className="text-foreground font-semibold">{col.title}</h4>
                {col.links.map(({ label, href, badge, badgeColor }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                  >
                    {label}
                    {badge && (
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                          badgeColor === 'gold'
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white'
                            : badgeColor === 'blue'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : badgeColor === 'purple'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'
                        }`}
                      >
                        {badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>{copyright}</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
