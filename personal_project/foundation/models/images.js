module.exports = (mongoose) => {
  const Image = mongoose.model(
    'Image',
    mongoose.Schema({
      url: { type: String, required: true },
      tags: [String],
      vtuberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vtuber' }
    }, { timestamps: true })
  );
  return Image;
};
