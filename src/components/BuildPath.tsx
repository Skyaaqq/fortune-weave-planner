import type { BuildGuide } from '../domain/models';
import { formatBuild } from '../utils/build';
import { splitBuildPaths } from '../utils/strategy';
export function BuildPath({ guide }: { guide: BuildGuide }) {
  const { recommended } = splitBuildPaths(guide);
  return <div className="class-guide-box"><div className="build-heading"><span>{guide.confidence === 'experimental' ? '本路线方案 · 实验' : '推荐职业'}</span><span className="class-tag">{guide.tag}</span></div><div className="class-path">{formatBuild(recommended)}</div>{guide.goal && <p className="build-goal">培养目标：{guide.goal}</p>}</div>;
}
