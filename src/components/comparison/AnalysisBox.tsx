interface AnalysisBoxProps {
  text: string;
}

export function AnalysisBox({ text }: AnalysisBoxProps) {
  return (
    <div className="analysis-box">
      <div className="analysis-title">Statistical Analysis</div>
      <p>{text}</p>
    </div>
  );
}
