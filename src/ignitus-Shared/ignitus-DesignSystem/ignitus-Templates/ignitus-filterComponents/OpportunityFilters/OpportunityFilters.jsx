/* eslint-disable import/extensions */
/* eslint-disable no-eval */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import * as C from '../../../ignitus-Atoms/colors.ts';
import * as S from './styles.ts';
import { AppIcon } from '../../../../types/iconsTypes/enums';

export default function OpportunityFilters() {
  const [Tags, setTags] = useState({
    datePosted: '',
    jobType: '',
    jobLocation: '',
  });
  const [keyWords, setKeyWords] = useState({
    keywords: '',
  });
  const handlechange = (e, type) => setTags({
    ...Tags,
    [type]: e.target.textContent,
  });
  const resetTag = type => setTags({
    ...Tags,
    [type]: '',
  });
  const resetFilters = () => {
    setTags({
      ...Tags,
      datePosted: '',
      jobType: '',
      jobLocation: '',
    });
    setKeyWords({
      keywords: '',
    });
  };

  const datePosted = ['Past 24 hours', 'Past week', 'Past Month', 'Any time'];
  const jobType = ['Part time', 'Full time', 'Contract'];
  const jobLocation = ['Berlin, Germany', 'Berlin', 'India'];

  return (
    <S.FiltersContainer>
      <S.UpperContainer>
        <S.SearchIconContainer name={AppIcon.SearchIcon} />
        <S.FilterItemsContainer>
          <S.TagsBarContainer>
            {
              Object.keys(Tags).map(key => (Tags[key] ? (
                <S.TagBtnContainer key={key}>
                  {Tags[key]}
                  <S.CrossIconContainer name={AppIcon.CrossIcon} onClick={() => resetTag(key)} />
                </S.TagBtnContainer>
              ) : ''))
            }
          </S.TagsBarContainer>
          <S.DashedLineContainer />
          <S.SearchBarContainer>
            <S.InputContainer
              type="text"
              name="keyword"
              value={keyWords.keywords}
              onChange={e => setKeyWords({ keywords: e.target.value })}
              placeholder="Search Keyword"
            />
            <S.CrossIconContainer
              name={AppIcon.CrossIcon}
              color={C.IgnitusBlue}
              onClick={() => setKeyWords({ keywords: '' })}
            />
          </S.SearchBarContainer>
        </S.FilterItemsContainer>
      </S.UpperContainer>
      <S.FilterBtnsContainer>
        {
          Object.keys(Tags).map((key, i) => (
            <S.DropdownContainer key={i}>
              <S.DropdownBtnContainer>
                {
                  key === 'datePosted' ? (
                    <span>
                      Date Posted
                      <S.ArrowDownIconContainer name={AppIcon.FilledArrowDownIcon} />
                    </span>
                  )
                    : key === 'jobType' ? (
                      <span>
                        Job Type
                        <S.ArrowDownIconContainer name={AppIcon.FilledArrowDownIcon} />
                      </span>
                    )
                      : (
                        <span>
                          <S.LocationIconContainer name={AppIcon.LocationIcon} />
                          Job Location
                        </span>
                      )
                }
              </S.DropdownBtnContainer>
              <S.SelectOptionContainer>
                {
                  eval(key).map(value => (
                    <S.SelectOptionText key={value} onClick={e => handlechange(e, key)}>
                      {value}
                    </S.SelectOptionText>
                  ))
                }
              </S.SelectOptionContainer>
            </S.DropdownContainer>
          ))
        }
        <S.ResetBtnContainer onClick={resetFilters}>Reset Filter</S.ResetBtnContainer>
      </S.FilterBtnsContainer>
    </S.FiltersContainer>
  );
}
