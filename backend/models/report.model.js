import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String, 
      },
    ],
    notes: {
      type: String,
    },
  },
  { _id: false }
);

const reportSchema = new mongoose.Schema(
  {
    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Theft",
        "Assault",
        "Harassment",
        "Accident",
        "Other",
      ],
    },

    details: descriptionSchema,

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      select: false, 
    },
  },
  {
    timestamps: true,
  }
);

reportSchema.index({
  "location.latitude": 1,
  "location.longitude": 1,
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
