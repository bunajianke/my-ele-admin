import { get, post } from "@/utils/request";

export function getArticleList(params) {
    return get("/article", params);
}