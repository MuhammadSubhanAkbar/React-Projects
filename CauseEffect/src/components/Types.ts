export interface Items {
    id: number;
    title: string;
    category: string;
    description: string;
    details: string;
    image ?: string;
    tags?: string[];
    status : 'active' | 'completed' | 'upcoming';
}

export interface AppState {
    items : Items[];
    selectedItem : Items[];
    loading: boolean;
}