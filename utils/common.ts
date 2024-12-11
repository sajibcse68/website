import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import {
	format as dateFormat,
	add as dateAdd,
	parseISO as dateParseISO,
} from 'date-fns'

export function cn(...classNames: ClassValue[]): string {
  return twMerge(clsx(classNames));
}

export function formatDate(dateString: string | Date, format = 'PPP') {
	if (typeof dateString !== 'string') {
		dateString = dateString.toISOString()
	}
	return dateFormat(parseDate(dateString), format)
}

export function parseDate(dateString: string) {
	return dateAdd(dateParseISO(dateString), {
		minutes: new Date().getTimezoneOffset(),
	})
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
