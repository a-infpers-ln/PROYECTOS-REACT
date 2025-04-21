import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/recipes-schema";
import { SearchFilter } from "../types";

export async function getCategories() {
    const url = '/api/api/json/v1/1/list.php?c=list'; // <- usando el proxy
    const { data } = await axios(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `/api/api/json/v1/1/filter.php?c=${filters.category}&${filters.ingredient}`; // <- usando el proxy
    const { data } = await axios(url);
    const result = DrinksAPIResponse.safeParse(data);
    if (result.success) {
        return result.data;
    }
}
