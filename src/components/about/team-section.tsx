import { Twitter } from "lucide-react";
import Image from "next/image";
import member1 from "@/assets/owner1.jpg";
import member2 from "@/assets/owner2.jpg";
import member3 from "@/assets/owner3.jpg";
import member4 from "@/assets/vp.jpg";

export default function MeetOurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Marco",
      role: "HexPrep Owner",
      image: member1,
    },
    {
      id: 2,
      name: "Eric",
      role: "HexPrep Owner",
      image: member2,
    },
    {
      id: 3,
      name: "Khai",
      role: "HexPrep Owner",
      image: member3,
    },
    {
      id: 4,
      name: "Luis",
      role: "HexPrep Co-Owner",
      image: member4,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-4">
            Meet our team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the skilled team dedicated to delivering seamless and reliable
            FBA prep services for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* First row - 3 team members */}
          {teamMembers.slice(0, 3).map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  width={300}
                  height={300}
                />

                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Second row - 1 team member centered */}
        <div className="flex justify-center">
          <div className="text-center group max-w-sm">
            <div className="relative mb-4">
              <Image
                src={teamMembers[3].image}
                alt={teamMembers[3].name}
                className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                width={300}
                height={300}
              />

              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {teamMembers[3].name}
            </h3>
            <p className="text-purple-600 font-medium">{teamMembers[3].role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
