export type taskType = {
	id: string;
	name: string;
	isComplete: boolean;
	isEditing: boolean;
	description: string | null;
	location: string | null;
	start: string | null;
	end: string | null;
};
