import * as tagRepository from "../repository/tag.repository.js";

class TagController {
  getGalleryTags = async (req, res, next) => {
    const tags = await tagRepository.styleTags();
    res.status(200).json(tags);
  };
}
const controller = new TagController();

export default controller;
