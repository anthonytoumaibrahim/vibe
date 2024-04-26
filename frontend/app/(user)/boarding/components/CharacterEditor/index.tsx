"use client";

// Next & React stuff
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import Image from "next/image";

// Headless UI
import { Tab } from "@headlessui/react";

// Components
import { C2DParts } from "@/app/(user)/2d/2d_parts";
import Character from "@/app/(user)/2d_components/Character";

const CharacterEditor = () => {
  const characterData = useAppSelector((state) => state.characterEditorSlice);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[1024px] mt-4 rounded-2xl flex gap-8 relative overflow-hidden">
      <Image
        src="/images/boarding_bg.webp"
        alt=""
        className="object-cover object-left filter blur-sm -z-10"
        sizes="100%"
        priority={true}
        fill
      />

      <div className="relative z-0 scale-75 mx-auto">
        <Character data={characterData} />
      </div>

      <div className="flex gap-10">
        <Tab.Group>
          <Tab.Panels className="bg-white my-20 rounded-lg min-w-[640px] shadow-lg">
            <Tab.Panel className="p-6">
              <h1 className="text-center">Body</h1>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {C2DParts.body.map((body) => {
                  const { id, name } = body;

                  return (
                    <div
                      key={id}
                      className="bg-slate-200 rounded-lg h-[240px] relative"
                      onClick={() =>
                        dispatch({
                          type: "characterEditorSlice/updateData",
                          payload: {
                            type: "body",
                            data: {
                              id: id,
                            },
                          },
                        })
                      }
                    >
                      <Image
                        src={`/images/2d_thumbs/body/${id}.png`}
                        fill
                        sizes="100%"
                        className="object-contain"
                        quality={100}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </Tab.Panel>

            <Tab.Panel className="p-6">
              <h1 className="text-center">Hair</h1>

              <div className="grid grid-cols-3 gap-6 mt-4">
                {C2DParts.hair.map((body) => {
                  const { id, name } = body;

                  return (
                    <div
                      key={id}
                      className="bg-slate-200 rounded-lg h-[159px] relative"
                      onClick={() =>
                        updatePart("hair", {
                          id: id,
                        })
                      }
                    >
                      <Image
                        src={`/images/2d_thumbs/hair/${id}.png`}
                        fill
                        sizes="100%"
                        className="object-contain"
                        quality={100}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex">
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "#241c11" }}
                  onClick={() =>
                    dispatch({
                      type: "characterEditorSlice/updateData",
                      payload: {
                        type: "hair",
                        data: {
                          fill: "#241c11",
                        },
                      },
                    })
                  }
                ></button>
              </div>
            </Tab.Panel>

            <Tab.Panel className="p-6">
              <h1 className="text-center">Eyes</h1>

              <div className="grid grid-cols-3 gap-6 mt-4">
                {C2DParts.eye.map((body) => {
                  const { id, name } = body;

                  return (
                    <div
                      key={id}
                      className="bg-slate-200 rounded-lg h-[159px] relative"
                      onClick={() =>
                        updatePart("eye", {
                          id: id,
                        })
                      }
                    >
                      {/* <Image
                        src={`/images/2d_thumbs/hair/${id}.png`}
                        fill
                        sizes="100%"
                        className="object-contain"
                        quality={100}
                        alt=""
                      /> */}
                    </div>
                  );
                })}
              </div>

              <div className="flex">
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "#241c11" }}
                  onClick={() =>
                    updatePart("hair", {
                      fill: "#241c11",
                    })
                  }
                ></button>
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "#9a3300" }}
                  onClick={() =>
                    updatePart("hair", {
                      fill: "#9a3300",
                    })
                  }
                ></button>
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "#c6a969" }}
                  onClick={() =>
                    updatePart("hair", {
                      fill: "#c6a969",
                    })
                  }
                ></button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
          <Tab.List className="flex flex-col justify-center gap-6 bg-white min-w-[280px]">
            <Tab>Body</Tab>
            <Tab>Hair</Tab>
            <Tab>Eyes</Tab>
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CharacterEditor;
