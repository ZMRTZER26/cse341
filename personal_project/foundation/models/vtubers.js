module.exports = (mongoose) => {
  const Vtuber = mongoose.model(
    'Vtuber',
    mongoose.Schema({
      name: { type: String, required: true },
      debut: String,
      agency: String,
      bio: String,
      language: String,
      status: String,
      channel: String
    }, { timestamps: true })
  );
  return Vtuber;
};
