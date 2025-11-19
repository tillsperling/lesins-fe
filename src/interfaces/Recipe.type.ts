export interface Recipe {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    ingredients: Ingredient[];
    instructions: Instruction[];
    subRecipes: SubRecipe[];
}

export interface Ingredient {
    quantity: number;
    unit: string;
    name: string;
}

export interface Instruction {
    step: number;
    description: string;
}

export interface SubRecipe {
    recipeId: number;
}
