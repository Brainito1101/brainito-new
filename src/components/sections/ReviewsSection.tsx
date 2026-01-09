import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, TechStart",
    rating: 5,
    review: "Brainito transformed our marketing strategy completely. The DIY plan was easy to follow and we saw 40% growth in just 3 months.",
    initials: "SM",
    color: "from-primary to-purple-medium",
  },
  {
    name: "Michael Chen",
    role: "CEO, GrowthLabs",
    rating: 5,
    review: "The dedicated marketing manager feels like a true team member. Best investment we made for our startup this year.",
    initials: "MC",
    color: "from-accent to-orange-400",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Co",
    rating: 5,
    review: "Finally, a platform that understands small business needs. The action board keeps everything organized and on track.",
    initials: "ER",
    color: "from-purple-medium to-primary",
  },
  {
    name: "James Thompson",
    role: "Owner, Local Eats",
    rating: 4,
    review: "The monthly reporting gave us insights we never had before. Now we know exactly what's working and what's not.",
    initials: "JT",
    color: "from-orange-400 to-accent",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-white border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What People Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-2xl border border-border/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-accent fill-accent"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm sm:text-base relative z-10">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-semibold text-sm shadow-md`}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
