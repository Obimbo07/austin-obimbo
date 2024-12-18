import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import '../css/images.css'

const Intro = () => {
  return (
    <div className="bg-[#f8f2f0] min-h-screen p-4">
      {/* Grid Layout for Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex gap-2">
            <div className="flex flex-none flex-col w-2/3 justify-center items-start gap-4 p-8 rounded-3xl bg-white shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Design<br />
                    Development <br />
                    <span className="text-pink-500">Architecture</span>
                </h2>
                <p className="text-gray-600">
                    Austin Obimbo is an innovative software developer who creates
                    architecture redefining modern living spaces.
                </p>
                <button className="bg-orange-500 hover:p-4 rounded-full text-white py-2 px-4">
                    Contact me
                </button>
            </div>
            <div className="at-office flex-1 rounded-3xl">

            </div>
        </div>
        

        {/* Right Section */}
        <div className="grid gap-4">
          {/* Top Image */}
          <div className="rounded-3xl h-48 bg-blue-800 flex justify-center items-center">
            <img
              src="/images/profile-placeholder.jpg"
              alt="Profile"
              className="rounded-full w-36 h-36 object-cover"
            />
          </div>
          {/* Card Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-3xl bg-pink-200 p-4">
              <CardContent className="p-2">
                <p>Muse</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-pink-200 p-4">
              <CardContent className="p-2">
                <p>Blan</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-pink-200 p-4">
              <CardContent className="p-2">
                <p>Verve</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-pink-200 p-4">
              <CardContent className="p-2">
                <p>Zephyr</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="#" className="text-gray-600 hover:text-pink-500">
          Instagram
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          Twitter
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-500">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Intro;
