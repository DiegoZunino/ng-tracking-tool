export interface SearchFilters {
    name: string;
    priority: "low" | "medium" | "high";
    done: "true" | "false";
}