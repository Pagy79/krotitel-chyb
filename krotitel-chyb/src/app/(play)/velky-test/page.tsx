import { EntitlementGate } from "@/components/EntitlementGate";
import { VelkyTest } from "@/components/VelkyTest";

export default function VelkyTestPage() {
  return (
    <EntitlementGate kind="big">
      <VelkyTest />
    </EntitlementGate>
  );
}
