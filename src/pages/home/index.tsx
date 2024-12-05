import { Heading, Text } from "@ignite-ui/react";
import { Hero, Preview, Render } from "./styles";

import previewImage from "../../assets/app-preview.png";
import Image from "next/image";
import { ClaimUsernameForm } from "./components/claim-username-form";

export default function Home() {
  return (
    <Render>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>

        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Render>
  );
}
