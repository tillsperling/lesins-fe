import { axiosInstance } from '@/utilities/axios.ts';

export const getRecipes = async () => {
    try {
        const response = await axiosInstance.get('/recipes');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postRecipe = async ({
    name,
    description,
    imageUrl,
}: {
    name: string;
    description: string;
    imageUrl: string;
}) => {
    try {
        const response = await axiosInstance.post('/recipes', {
            name,
            description,
            imageUrl,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteRecipe = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/recipes/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};

// TODO: put in correct data for instructions, ingredients subreceips etc
export const updateRecipe = async ({
    id,
    name,
    description,
    imageUrl,
}: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}) => {
    try {
        const response = await axiosInstance.patch(`/recipes/${id}`, {
            name,
            description,
            imageUrl,
        });
        return response;
    } catch (error) {
        throw error;
    }
};
