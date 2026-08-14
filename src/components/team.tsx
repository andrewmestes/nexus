import Image from "next/image";

export type TeamMember = {
  name: string;
  role?: string;
  bio?: string;
  photo: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  website?: { label: string; href: string };
};

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {members.map((m) => (
        <div key={m.name} className="flex gap-5">
          <Image
            src={m.photo}
            alt={m.name}
            width={120}
            height={120}
            className="h-28 w-28 flex-shrink-0 rounded-[10px] object-cover"
          />
          <div>
            <h3 className="font-heading text-lg font-semibold">{m.name}</h3>
            {m.role && (
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {m.role}
              </p>
            )}
            {m.bio && (
              <p className="mt-2 text-sm leading-relaxed opacity-80">{m.bio}</p>
            )}
            <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-accent">
              {m.email && <a href={`mailto:${m.email}`}>Email</a>}
              {m.facebook && (
                <a href={m.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              )}
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {m.website && (
                <a href={m.website.href} target="_blank" rel="noopener noreferrer">
                  {m.website.label}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
