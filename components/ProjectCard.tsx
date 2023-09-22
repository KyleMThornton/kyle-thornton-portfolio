import Image from 'next/image'

export default function ProjectCard() {
    return (
      <div className="card w-2/5 bg-base-100 shadow-xl m-5">
        <figure className="px-10 pt-10">
          <Image
            src="/public/images/midpoint_thumb.jpg"
            alt="midpoint"
            className="rounded-xl"
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">midpoint</h2>
          <p className="p-4">A webapp that takes two locations and returns a third location in the center between as well as a list of restaraunts and things to do there.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">NextJS</div>
            <div className="badge badge-outline">Tailwind</div>
          </div>
        </div>
      </div>
    );
}