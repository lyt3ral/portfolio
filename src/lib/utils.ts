import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function reveal(node: HTMLElement) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('reveal-active');
					observer.unobserve(node);
				}
			});
		},
		{ 
			threshold: 0.15,
			rootMargin: '0px 0px -150px 0px'
		}
	);

	node.classList.add('reveal-hidden');
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

export function magnetic(node: HTMLElement) {
	const move = (e: MouseEvent) => {
		const { left, top, width, height } = node.getBoundingClientRect();
		const middleX = left + width / 2;
		const middleY = top + height / 2;
		const x = (e.clientX - middleX) * 0.35;
		const y = (e.clientY - middleY) * 0.35;
		node.style.transform = `translate(${x}px, ${y}px)`;
	};

	const reset = () => {
		node.style.transform = `translate(0px, 0px)`;
	};

	node.addEventListener('mousemove', move);
	node.addEventListener('mouseleave', reset);

	return {
		destroy() {
			node.removeEventListener('mousemove', move);
			node.removeEventListener('mouseleave', reset);
		}
	};
}
