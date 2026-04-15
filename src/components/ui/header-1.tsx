'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const [isCTAHighlighted, setIsCTAHighlighted] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const problemEl = document.getElementById('problem');
			if (problemEl) {
				const rect = problemEl.getBoundingClientRect();
				// Highlight when the #problem section is scrolled halfway into view
				setIsCTAHighlighted(rect.top <= window.innerHeight * 0.5);
			} else {
				setIsCTAHighlighted(window.scrollY > 600);
			}
		};
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const links = [
		{
			label: 'Problem',
			href: '#problem',
		},
		{
			label: 'Lösung',
			href: '#loesung',
		},
		{
			label: 'Angebot',
			href: '#angebote',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('fixed top-0 z-50 w-full border-b transition-all duration-500', 
				scrolled 
					? 'bg-beige/95 supports-[backdrop-filter]:bg-beige/70 border-onyx/10 backdrop-blur-lg shadow-sm' 
					: 'bg-transparent border-transparent'
			)}
		>
			<nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 lg:px-[5%]">
				<div className="hover:bg-white/10 rounded-md p-2 transition-colors">
					<span className={cn("font-serif font-bold text-xl tracking-wider uppercase transition-colors duration-300", scrolled ? "text-onyx" : "text-white")}>Holen wir die Lommel</span>
				</div>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a 
							key={link.label} 
							className={cn(buttonVariants({ variant: 'ghost' }), "transition-colors duration-300", scrolled ? "text-onyx hover:bg-onyx/5" : "text-white/90 hover:text-white hover:bg-white/10")} 
							href={link.href}
						>
							{link.label}
						</a>
					))}
					<Button 
						asChild 
						variant={isCTAHighlighted ? "default" : "ghost"}
						className={cn(
							"transition-all duration-500",
							isCTAHighlighted 
								? "bg-[#C27347] text-white hover:bg-[#A85E3A]" 
								: scrolled ? "bg-transparent text-onyx hover:bg-onyx/5" : "bg-transparent text-white hover:bg-white/10"
						)}
					>
						<a href="https://zeeg.me/info8723/15" target="_blank" rel="noopener noreferrer">15 Min. Telefonat</a>
					</Button>
				</div>
				<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					className={cn("md:hidden transition-colors border", scrolled ? "border-onyx/20 text-onyx" : "border-white/20 text-white hover:bg-white/10")}
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start',
							})}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<Button 
						className={cn(
							"w-full transition-all duration-500",
							isCTAHighlighted 
								? "bg-[#C27347] text-white hover:bg-[#A85E3A]" 
								: "bg-transparent text-foreground hover:bg-accent border border-foreground/10"
						)} 
						variant={isCTAHighlighted ? "default" : "outline"}
						asChild
					>
						<a href="https://zeeg.me/info8723/15" target="_blank" rel="noopener noreferrer">15 Min. Telefonat</a>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}


