'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Text3DFlip } from '@/components/ui/text-3d-flip'
import NeuralBackground from '@/components/ui/flow-field-background'
import { AnimatedText } from '@/components/ui/animated-underline-text-one'
import { cn } from '@/lib/utils'
import { BentoSection } from './bento-section'
import { FeatureShowcaseSection } from './feature-showcase-section'
import { TestimonialSection } from './testimonial-section'
import { PricingSectionWrapper } from './pricing-section'
import { FAQSection } from './faq-section'
import { CTASection } from './cta-section'
import { FooterSection } from './footer-section'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    const [isMuted, setIsMuted] = React.useState(true)
    const videoRef = React.useRef<HTMLVideoElement>(null)

    const toggleMute = () => {
        setIsMuted(!isMuted)
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
        }
    }

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <NeuralBackground 
                        color="#818cf8"
                        trailOpacity={0.08}
                        particleCount={400}
                        speed={0.8}
                    />
                </div>
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block object-cover w-full h-full opacity-20"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Introducing Next-Gen Holographic Technology</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <Text3DFlip
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-serif"
                                        textClassName="text-foreground"
                                        flipTextClassName="text-primary"
                                        rotateDirection="top"
                                        staggerDuration={0.03}
                                        staggerFrom="first"
                                        transition={{ type: "spring", damping: 25, stiffness: 160 }}
                                    >
                                        Unlock Life-Size Intelligence
                                    </Text3DFlip>
                                    <AnimatedText
                                        text="Experience the Future of Display"
                                        textClassName="text-2xl md:text-3xl text-muted-foreground font-medium"
                                        underlineClassName="text-primary"
                                        underlinePath="M 0,10 Q 50,0 100,10 Q 150,20 200,10 Q 250,0 300,10"
                                        underlineHoverPath="M 0,10 Q 50,20 100,10 Q 150,0 200,10 Q 250,20 300,10"
                                        underlineDuration={1.5}
                                        className="mt-6"
                                    />
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                                        Tymor LFTC delivers high-end AI holographic displays (Holoboxes) that bring digital intelligence to life-size proportions.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Explore Holoboxes</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border-0 p-0 shadow-lg shadow-zinc-950/15 ring-0">
                                    <video
                                        ref={videoRef}
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block object-cover w-full"
                                        src="/cutteryt.mp4"
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        playsInline
                                    />
                                    <video
                                        ref={videoRef}
                                        className="z-2 border-0 aspect-15/8 relative rounded-2xl dark:hidden object-cover w-full"
                                        src="/cutteryt.mp4"
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        playsInline
                                    />
                                    <button
                                        onClick={toggleMute}
                                        className="absolute top-8 right-8 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                                        aria-label={isMuted ? "Unmute" : "Mute"}
                                    >
                                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Partners</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:grid-cols-4 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-7 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/nvidia.svg"
                                    alt="NVIDIA Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-6 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/sony.svg"
                                    alt="Sony Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-8 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/intel.svg"
                                    alt="Intel Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-7 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/amd.svg"
                                    alt="AMD Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-6 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/qualcomm.svg"
                                    alt="Qualcomm Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-7 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/apple.svg"
                                    alt="Apple Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-7 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/samsung.svg"
                                    alt="Samsung Logo"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-7 w-auto opacity-50 hover:opacity-100 transition-all duration-300"
                                    src="/meta.svg"
                                    alt="Meta Logo"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <BentoSection />
                <FeatureShowcaseSection />
                <TestimonialSection />
                <PricingSectionWrapper />
                <FAQSection />
                <CTASection />
                <FooterSection />
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Products', href: '#link' },
    { name: 'Technology', href: '#link' },
    { name: 'Solutions', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/logo-tymor.png"
            alt="Tymor LFTC"
            className={cn('h-8 w-auto', className)}
        />
    )
}
