import FigmaIcon from "../assets/icons/figma.svg?react"
import HtmlIcon from "../assets/icons/html.svg?react"
import PresentationIcon from "../assets/icons/presentation.svg?react"
import PaletteIcon from "../assets/icons/palette.svg?react"
import CameraIcon from "../assets/icons/camera.svg?react"

export interface IProfessionsCard {
	id: number;
	title: string;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const ProfessionsCardsData: IProfessionsCard[] = [
	{
		id: 1,
		title: "Дизайнер интерфейсов",
		Icon: FigmaIcon
	},
	{
		id: 2,
		title: "Фронтенд-разработчик",
		Icon: HtmlIcon
	},
	{
		id: 3,
		title: "Бизнес-аналитик",
		Icon: PresentationIcon
	},
	{
		id: 4,
		title: "Графический дизайнер",
		Icon: PaletteIcon
	},
	{
		id: 5,
		title: "Контент-продюсер",
		Icon: CameraIcon
	},
]