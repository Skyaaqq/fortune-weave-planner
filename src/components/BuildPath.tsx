import type { BuildGuide } from '../domain/models';
import { formatBuild } from '../utils/build';
export function BuildPath({ guide }: { guide: BuildGuide }) {
  return <div className="class-guide-box"><span className="class-tag">{guide.tag}</span><div className="class-path">转职：{formatBuild(guide.paths)}</div><div className="class-why">{guide.reason}</div></div>;
}
