"use client";

import { Badge } from "@/components/ui/badge";
import { KeyboardEvent, MouseEvent, useState } from "react";

// This component creates, in effect, a select input that can accept multiple values. It uses the Badge component to display the options, and checkboxes to handle the selection of the options.
// If fewer options are selected than the maxSelectable prop, then the checkbox is toggled, its inclusion in the selected array is toggled, and the accompanying badge's style is toggled.
// If equal options are selected than the maxSelectable prop, then the checkbox that was just checked is unchecked and the selected array is updated to remove the value of the unchecked checkbox if it was in the selected array.
export default function BadgeMultiSelect({
	options,
	name,
	maxSelectable,
}: { options: string[]; name: string; maxSelectable: number }) {
	const [selected, setSelected] = useState<string[]>([]);
	const selectedCount = selected.length;

	function handleSelect(
		event:
			| MouseEvent<HTMLLabelElement>
			| KeyboardEvent<HTMLLabelElement>
			| KeyboardEvent<HTMLDivElement>
			| MouseEvent<HTMLDivElement>
			| MouseEvent<HTMLInputElement>
			| KeyboardEvent<HTMLInputElement>,
	) {
		if (selectedCount < maxSelectable) {
			if ((event.target as Element).matches("[data-checkbox]")) {
				if (selected.includes((event.target as HTMLInputElement).value)) {
					setSelected(
						selected.filter(
							(item) => item !== (event.target as HTMLInputElement).value,
						),
					);
				} else {
					setSelected((prev) => [
						...prev,
						(event.target as HTMLInputElement).value,
					]);
				}
			}
		} else {
			if ((event.target as HTMLElement).matches("[data-badge]")) {
				(event.target as HTMLElement).classList.toggle("selected");
			}
			if ((event.target as HTMLElement).matches("[data-checkbox")) {
				(event.target as HTMLInputElement).checked = false;

				if (selected.includes((event.target as HTMLInputElement).value)) {
					setSelected(
						selected.filter(
							(item) => item !== (event.target as HTMLInputElement).value,
						),
					);
				}
			}
		}
	}

	return (
		<>
			{Array.from(options).map((option) => (
				<label
					key={option}
					htmlFor={option}
					tabIndex={0}
					onClick={handleSelect}
					onKeyUp={handleSelect}
				>
					<input
						id={option}
						type="checkbox"
						name={name}
						value={option}
						hidden
						data-checkbox={true}
					/>
					<Badge data-badge={true}>{option}</Badge>
				</label>
			))}
		</>
	);
}
