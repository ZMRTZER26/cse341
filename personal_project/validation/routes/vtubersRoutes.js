const express = require("express");
const router = express.Router();
const vtubersController = require("../controllers/vtubers");
const { validateVtuber } = require("../middleware/validate");

router.get("/", vtubersController.getVtubers);
router.get("/:id", vtubersController.getSingleVtuber);
// #swagger.tags = ['Vtubers']
// #swagger.description = 'Create a new vtuber.'
/* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Vtuber information',
    required: true,
    schema: {
      name: "Hoshimachi Suisei",
      debut: "2018-03-22",
      agency: "Hololive",
      bio: "An idol vtuber and singer.",
      language: "Japanese",
      status: "Active",
      channel: "https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A"
    }
  }
*/
router.post("/", validateVtuber, vtubersController.createVtuber);
// #swagger.tags = ['Vtubers']
// #swagger.description = 'Update an existing vtuber.'
/* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Updated vtuber info',
    required: true,
    schema: {
      name: "Shirakami Fubuki",
      debut: "2018-06-01",
      agency: "Hololive",
      bio: "A cheerful fox vtuber.",
      language: "Japanese",
      status: "Active",
      channel: "https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg"
    }
  }
*/

router.put("/:id", validateVtuber, vtubersController.updateVtuber);
router.delete("/:id", vtubersController.deleteVtuber);

module.exports = router;
