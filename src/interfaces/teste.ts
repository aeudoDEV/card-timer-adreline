import { ReactNode } from "react";

export interface Teste {
  cards: any[];
  cardname: string;
  motiveCard: string;
  textArea: string;
  timerCard: ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCardName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMotiveName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhrase: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTimeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
