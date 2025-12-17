import { Router } from "express";
// import commentRouter from "./comment.router.js";
// import curationRouter from "./curation.router.js";
// import styleRouter from "./style.router.js";
import imageRouter from "./image.router.js";

const router = new Router();

//router.use("/comments", commentRouter);
// router.use("/curations", curationRouter);
// router.use("/styles", styleRouter);
router.use("/images", imageRouter);

// router.get(`/tags`, getGalleryTags);
// router.get(`/ranking`, getRankingStyles);

export default router;

//client쪽 참고 코드로 주석 처리
// const postComment = async (
//   curationId: number,
//   body: CommentFormInput,
// ) => {
//   const response = await fetch(, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const { comment } = await response.json()
//   return { comment }
// }

// const putComment = async (commentId: number, body: CommentFormInput) => {
//   const response = await fetch(`/comments/${commentId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await response.json()
//   return data
// }

// const deleteComment = async (
//   commentId: number,
//   body: CommentDeleteFormInput,
// ) => {
//   const response = await fetch(`/comments/${commentId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await response.json()
//   return data
// }

// const postCuration = async (styleId: number, body: CurationFormInput) => {
//   const response = await fetch(`/styles/${styleId}/curations`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await response.json()
//   return data
// }

// const getCurations = async (
//   styleId: number,
//   params: CurationsSearchParams,
// ): Promise<PaginationResponse<CurationType>> => {
//   const urlParams = new URLSearchParams()
//   urlParams.set('searchBy', params.searchBy)
//   urlParams.set('keyword', params.keyword)
//   urlParams.set('page', params.page.toString())
//   urlParams.set('pageSize', CURATIONS_PAGE_SIZE.toString())
//   const query = urlParams.toString()
//   const response = await fetch(
//     `/styles/${styleId}/curations?${query}`,
//     {
//       next: { tags: ['curations'] },
//     },
//   )
//   const { currentPage, totalPages, totalItemCount, data } =
//     await response.json()
//   return { currentPage, totalPages, totalItemCount, data }
// }

// const putCuration = async (
//   curationId: number,
//   body: CurationFormInput,
// ) => {
//   const response = await fetch(`/curations/${curationId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await response.json()
//   return data
// }

// const deleteCuration = async (
//   curationId: number,
//   body: CurationDeleteFormInput,
// ) => {
//   const response = await fetch(`/curations/${curationId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await response.json()
//   return data
// }

// const uploadImage = async (file: File) => {
//   const formData = new FormData()
//   formData.append('image', file)
//   const response = await fetch(`/images`, {
//     method: 'POST',
//     body: formData,
//   })

//   const data = await response.json()
//   const { imageUrl } = data
//   return { imageUrl }
// }

// const postStyle = async (body: StyleFormInput): Promise<StyleDetail> => {
//   const response = await fetch(`/styles`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const styleDetail = await response.json()
//   return styleDetail
// }

// const getStyle = async (styleId: number): Promise<StyleDetail> => {
//   const response = await fetch(`/styles/${styleId}`)
//   const style = await response.json()
//   return style
// }

// const putStyle = async (styleId: number, body: StyleFormInput) => {
//   const response = await fetch(`/styles/${styleId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await response.json()
//   return data
// }

// const deleteStyle = async (
//   styleId: number,
//   body: StyleDeleteFormInput,
// ) => {
//   const response = await fetch(`/styles/${styleId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const { message } = await response.json()
//   return { message }
// }

// const getGalleryStyles = async (
//   params: GalleryStylesSearchParams,
// ): Promise<PaginationResponse<GalleryStyle>> => {
//   const urlParams = new URLSearchParams()
//   urlParams.set('sortBy', params.sortBy)
//   urlParams.set('searchBy', params.searchBy)
//   urlParams.set('keyword', params.keyword)
//   urlParams.set('tag', params.tag)
//   urlParams.set('page', params.page?.toString() ?? '1')
//   urlParams.set('pageSize', GALLERY_STYLES_PAGE_SIZE.toString())
//   const query = urlParams.toString()

//   const response = await fetch(`/styles?${query}`, {
//     next: { tags: ['galleryStyles'] },
//   })
//   const { currentPage, totalPages, totalItemCount, data } =
//     await response.json()
//   return { currentPage, totalPages, totalItemCount, data }
// }

// const getGalleryTags = async () => {
//   const response = await fetch(`/tags`, {
//     next: { tags: ['galleryTags'] },
//   })
//   const { tags } = await response.json()
//   return { tags }
// }

// const getRankingStyles = async (
//   params: RankingStylesSearchParams,
// ): Promise<PaginationResponse<RankingStyle>> => {
//   const urlParams = new URLSearchParams()
//   urlParams.set('rankBy', params.rankBy)
//   urlParams.set('page', params.page.toString())
//   urlParams.set('pageSize', RANKING_STYLES_PAGE_SIZE.toString())
//   const query = urlParams.toString()

//   const response = await fetch(`/ranking?${query}`, {
//     next: { tags: ['rankingStyles'] },
//   })
//   const { currentPage, totalPages, totalItemCount, data } =
//     await response.json()
//   return { currentPage, totalPages, totalItemCount, data }
// }
