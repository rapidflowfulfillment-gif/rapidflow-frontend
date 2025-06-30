import { Truck, DollarSign, Package } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-[#F1F1F3] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 text-center mb-12">
          What sets us apart from the rest
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Quick shipping */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Quick shipping and turnaround time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upon receiving your inventory it goes out within 48 hours
              </p>
            </div>
          </div>

          {/* Tax FREE state */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="text-white font-bold text-sm">OR</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Tax FREE state
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are located in Oregon which is a tax free state
              </p>
            </div>
          </div>

          {/* Loading docks */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Loading docks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For LTL and FTL shipments we have loading docks available
              </p>
            </div>
          </div>

          {/* Competitively priced */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Competitively priced
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are by far the most competitively priced prep center in the
                space
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
