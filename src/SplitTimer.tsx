import React, { useEffect, useState } from "react";
import { Run, RunState } from "./Run";
import { RunTimer } from "./RunTimer";
import { getShrine } from "./shrines";

export type SplitTimerProps = {
	run: Run;
	currentShrine: number;
	onUpdatePausedTime: (paused_time: number) => void;
};

export const SplitTimer = (props: SplitTimerProps) => {
	const [timeclasses, setTimeclasses] = useState(["time"]);

	const { run } = props;

	useEffect(() => {
		const time_classes = ["time"];
		if (run.state === RunState.Default) {
			time_classes.push("is-initial");
		}
		if (run.state === RunState.Paused) {
			time_classes.push("is-paused");
		}
		if (run.state === RunState.Ended) {
			time_classes.push("is-ended");
		}
		setTimeclasses(time_classes);
	}, [run.state]);

	let out = <></>;

	if (run.state == RunState.Default) {
		out = <NotStarted />;
	} else if (run.state == RunState.Paused) {
		out = <Paused />;
	} else if (run.state == RunState.Ended) {
		out = <Ended />;
	} else {
		out = <RunDisplay {...props} />;
	}

	return <div className={timeclasses.join(" ")}>{out}</div>;
};

const NotStarted = () => <>Not started</>;
const Paused = () => <>Paused</>;
const Ended = () => <>Ended</>;

const RunDisplay = (props: SplitTimerProps) => {
	const { run, currentShrine } = props;
	const shrine_id = run.shrine_ids[currentShrine];
	const current_shrine = getShrine(shrine_id);

	const [timestamp, setTimestamp] = useState(-1);

	useEffect(() => {
		setTimestamp(run.rundate);
	}, [run.rundate]);

	return (
		<div className="shrine current">
			<div className="counter">
				{currentShrine > -1 ? currentShrine + 1 : ""}
			</div>

			<div className="name">
				{current_shrine?.name ? current_shrine.name : "Ready to go"}
			</div>

			<div className="desc">
				{current_shrine?.desc
					? current_shrine.desc
					: "Start the timer to reveal the first shrine!"}
			</div>

			<RunTimer
				timestamp={timestamp}
				runstate={run.state}
				onUpdatePausedTime={props.onUpdatePausedTime}
			/>
		</div>
	);
};
