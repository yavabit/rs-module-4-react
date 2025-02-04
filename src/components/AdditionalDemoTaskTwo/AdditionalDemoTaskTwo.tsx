import { useToggle } from "../../shared/hooks/useToggle";

export const AdditionalDemoTaskTwo = () => {
	const [valueColor, toggleColor] = useToggle(["blue", "orange", "cyan", "teal"]);
	const [valueTheme, toggleTheme] = useToggle(['light', 'dark']);
	const [valueThemeParam, toggleThemeParam] = useToggle(['light', 'contrast', 'dark']);

	return (
		<>
			<p><button onClick={() => toggleColor()} style={{backgroundColor: valueColor}}>{valueColor}</button></p>
			<p><button onClick={() => toggleTheme()}>{valueTheme}</button></p>
			<p><button onClick={() => toggleThemeParam('dark')}>{valueThemeParam}</button></p>
		</>
	)
};
