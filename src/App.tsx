import { Checkbox1 } from "./Checkbox1";
import { Checkbox2 } from "./Checkbox2";
import { Checkbox3 } from "./Checkbox3";
import { Checkbox4 } from "./Checkbox4";
import { Checkbox5 } from "./Checkbox5";

export function App() {
  return (
    <div>
      <Checkbox1>
        <a href="/terms">利用規約</a>と
        <a href="/privacy-policy">プライバシーポリシー</a>に
        <span>同意しました</span>
      </Checkbox1>
      <Checkbox2>
        <a href="/terms">利用規約</a>と
        <a href="/privacy-policy">プライバシーポリシー</a>に
        <span>同意しました</span>
      </Checkbox2>
      <Checkbox3>
        <a href="/terms">利用規約</a>と
        <a href="/privacy-policy">プライバシーポリシー</a>に同意しました
      </Checkbox3>
      {/*
      <Checkbox3> // エラーになる例
        <a href="/terms">利用規約</a>と
        <a href="/privacy-policy">プライバシーポリシー</a>に
        <span>同意しました</span>
      </Checkbox3>
      */}
      <Checkbox4
        contents={[
          { text: "利用規約", href: "/terms", target: "_blank" },
          { text: "と" },
          { text: "プライバシーポリシー", href: "/privacy-policy" },
          { text: "に同意しました" },
        ]}
      />
      <Checkbox5
        contents={[
          {
            text: "利用規約",
            href: "/terms",
            target: "_blank",
            className: "text-red-500",
          }, // classNameにエラー（想定通り）
          { text: "と" },
          { text: "プライバシーポリシー", href: "/privacy-policy" },
          { text: "に同意しました" },
        ]}
      />
    </div>
  );
}

export default App;
