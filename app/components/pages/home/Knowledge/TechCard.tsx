import { CMSIcon } from "@/app/components/cms-icon";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { getRelativeTimeString } from "@/app/utils/get-relative-time";

type TechCardProps = {
  tech: IKnownTech;
};

export const TechCard = ({ tech }: TechCardProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há ", "");
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-rose hover:bg-gray-50 transition-all">
      <div className="flex items-center justify-between ">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  );
};
